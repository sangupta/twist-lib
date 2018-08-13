import React from 'react';
import ReactDOM from 'react-dom';

import Alert from 'components/Alert';

@Component
class App {

    render() {
        return <g>
            <header class='mb-auto'>
                <nav class="navbar navbar-expand-md fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">TwistLib</a>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Components</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main role='main' class='container-fluid'>
                <div class='row flex-xl-nowrap'>
                    <div class='col-12 col-md-3 col-xl-2 sidebar'>
                        <ul class='nav flex-column'>
                            <li class='nav-item'><a class="nav-link" href='#'>Alert</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Badge</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Breadcrumbs</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Button</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Button Group</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Button Toolbar</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Infinite Scroll</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Jumbotron</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Link Button</a></li>
                            <li class='nav-item'><a class="nav-link" href='#'>Progress Bar</a></li>
                        </ul>
                    </div>
                    <div class='col doc-container'>
                    </div>
                </div>
            </main>
            <footer class='mt-auto'>
                <div class='row'>
                    <div class='col'>
                        TwistLib Documentation. Powered by React, TwistLib and Boostrap.
                    </div>
                </div>
            </footer>
        </g>;
    }

}

// mount the application compoonent to document body
ReactDOM.render( <App />, document.body );
module.hot.accept();
