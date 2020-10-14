import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "axios";
import classes from "./Posts.css";
import {Link, NavLink} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    }

    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 10);
                const updatedPosts = posts.map(
                    post => {
                        return {
                            ...post,
                            author: 'Max'
                        }
                    }
                )
                this.setState({
                    posts: updatedPosts,
                })
            })
            .catch(err => {
                this.setState({error: true});
            });
    }

    clickedPostHandler = (id) => {
        this.setState({
            selectedPostId: id,
        })
    }

    render() {
        let posts = <p> Error!!! </p>;
        if (!this.state.error) {
            posts = this.state.posts.map(
                post => {
                    return (
                        <Link to={'/' + post.id}
                                 key={post.id}>
                            <Post
                                title={post.title}
                                author={post.author}
                                clicked={() => this.clickedPostHandler(post.id)} // ```()=>``` is important
                            />
                        </Link>);
                }
            );
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;