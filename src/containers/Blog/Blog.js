import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link, NavLink, Switch} from 'react-router-dom';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";

class Blog extends Component {
    render () {
        return (
            <div>
                <section className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li> <NavLink to="/" exact activeClassName="active"> Home </NavLink> </li>
                                <li> <NavLink to="/new-post" exact> Add Post</NavLink> </li>
                            </ul>
                        </nav>
                    </header>
                </section>
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;