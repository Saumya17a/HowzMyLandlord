import React, { Component } from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";
import useForm from "./useForm";
import validateSignIn from './validateSignIn.js';
import {useEffect,useRef} from 'react'
import { post } from "jquery";

function Dashboard(props) {
    return (
        <section id="dashboard">
            <ParticlesBg type="circle" bg={true} />
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>
                <ul id="nav" className="nav">
                    <li className="dashboardNav">
                        <a className="dashboardNav" >
                            Home
                        </a>
                    </li>

                    <li>
                        <a className="dashboardNav">
                            Sign Up
                        </a>
                    </li>
                    
                    <li>
                        <a className="dashboardNav">
                            Sign In
                        </a>
                    </li>
                </ul>
                <div className="row banner">
                    <div className="banner-text">
                        <Fade bottom>
                            <h1 className="responsive-headline">TEST</h1>
                        </Fade>
                        <Fade bottom duration={1200}>
                            <h3>TEST.</h3>
                        </Fade>
                        <div className = "box">
                            <input type="text"  class="searchTerm" placeholder="Ex: 3954 Dallas Road" />
                        </div>
                        <div className = "buttonSearch">
                            <button type="submit" class="searchButton" className = "buttonSearch">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
};

export default Dashboard;


