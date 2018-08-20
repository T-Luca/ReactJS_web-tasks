import React, {Component} from 'react';


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item">
                                    <a href="#">About</a>
                                </li>
                                <li className="list-inline-item">&sdot;</li>
                                <li className="list-inline-item">
                                    <a href="#">Contact</a>
                                </li>
                                <li className="list-inline-item">&sdot;</li>
                                <li className="list-inline-item">
                                    <a href="#">Terms of Use</a>
                                </li>
                                <li className="list-inline-item">&sdot;</li>
                                <li className="list-inline-item">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">&copy; React Website 2018. All Rights
                                Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}