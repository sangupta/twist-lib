import React from 'react';
import ReactDOM from 'react-dom';

import AlertDocs from './pages/AlertDocs';
import BadgeDocs from './pages/BadgeDocs';
import ButtonDocs from './pages/ButtonDocs';
import ButtonGroupDocs from './pages/ButtonGroupDocs';
import ButtonToolbarDocs from './pages/ButtonToolbarDocs';
import InfiniteScrollDocs from './pages/InfiniteScrollDocs';
import JumbotronDocs from './pages/JumbotronDocs';
import LinkButtonDocs from './pages/LinkButtonDocs';
import ProgressBarDocs from './pages/ProgressBarDocs';
import BreadcrumbDocs from './pages/BreadcrumbDocs';
import ListGroupDocs from './pages/ListGroupDocs';
import NavDocs from './pages/NavDocs';

@Component
class App {

    myChildren = {};

    @Observable
    activeComponent = null;

    componentWillMount() {
        this.myChildren['Alert'] = <AlertDocs />;
        this.myChildren['Badge'] = <BadgeDocs />;
        this.myChildren['Breadcrumb'] = <BreadcrumbDocs />;
        this.myChildren['Button'] = <ButtonDocs />;
        this.myChildren['Button Group'] = <ButtonGroupDocs />;
        this.myChildren['Button Toolbar'] = <ButtonToolbarDocs />;
        this.myChildren['Infinite Scroll'] = <InfiniteScrollDocs />;
        this.myChildren['Jumbotron'] = <JumbotronDocs />;
        this.myChildren['Link Button'] = <LinkButtonDocs />;
        this.myChildren['List Group'] = <ListGroupDocs />;
        this.myChildren['Nav'] = <NavDocs />;
        this.myChildren['Progress Bar'] = <ProgressBarDocs />;
    }

    addAllChildComponents() {
        let result = [];

        let keys = Object.keys(this.myChildren);
        for(let index = 0; index < keys.length; index++) {
            let componentName = keys[index];
            let componentItem = this.myChildren[componentName];
            
            result.push(<li class='nav-item'><a class="nav-link" href='#' onClick={ () => this.activeComponent = componentItem } >{ componentName }</a></li>);
        }

        return result;
    }

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
                            { this.addAllChildComponents() }
                        </ul>
                    </div>
                    <div class='col doc-container'>
                        { this.activeComponent ? this.activeComponent : '' }
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
