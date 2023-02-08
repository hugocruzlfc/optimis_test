import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="card p-5">
        <h1 className="text-center ps-2 pe-2 pt-5 pb-4">
          Welcome to the Optimism test!
        </h1>
        <h3 className="text-start ps-2 pe-2 pt-5 pb-4">
          We have some stains and we can create new groups associating them with
          the stains you want.
        </h3>
        <div className="row-md-12">
          <div className="col-md-12">
            <div
              className="btn-toolbar p-5"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <Link
                  type="button"
                  className="btn btn-outline-secondary"
                  to="/stain"
                  id="goToStains"
                >
                Go to Stains
                </Link>
                <Link
                  type="button"
                  className="btn btn-outline-secondary"
                  to="/group"
                  id="goToGroups"
                >
                  Go to Groups
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
