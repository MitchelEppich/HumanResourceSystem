/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Login from "../components/Admin/Login";
import Main from "../components/Main";
import Complaints from "../components/Admin/Complaints";
import UserViewer from "../components/Admin/UserViewer";

import Navbar from "../components/Navbar"

import { Subscription } from "react-apollo";
import gql from "graphql-tag";

class Index extends Component {
  componentDidMount() {
    // this.props.fetchCredentials().then(res => {
    //   if (res == null) return;
    //   this.props.setVisibleScreen(null);
    // });
  }

  componentDidUpdate(prevProps) {
    // if (this.props.user.currentUser == null) {
    //   this.props.fetchCredentials().then(res => {
    //     if (res == null) return;
    //     this.props.setVisibleScreen(null);
    //   });
    // }
  }

  render() {
    return (
      <Layout>
        {this.props.misc.visibleScreen != null &&
        !this.props.misc.visibleScreen.includes("login") ? (
        <Navbar {...this.props} /> ) : null }

        {this.props.misc.visibleScreen != null &&
        this.props.misc.visibleScreen.includes("login") ? (
          <Login {...this.props} />
        ) : null}

        {this.props.misc.visibleScreen == null || this.props.misc.visibleScreen.includes("home") || this.props.misc.visibleScreen.length == 0 ? (
          <Main {...this.props} /> ): null}

        {this.props.misc.visibleScreen != null &&
        this.props.misc.visibleScreen.includes("userViewer") ? (
          <UserViewer {...this.props} />
        ) : null}

        {this.props.misc.visibleScreen != null &&
        this.props.misc.visibleScreen.includes("admin") ? (
          <Complaints {...this.props} />
        ) : null}
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCredentials: () => dispatch(actions.fetchCredentials()),
    verifyCredentials: input => dispatch(actions.verifyCredentials(input)),
    registerCredentials: input => dispatch(actions.registerCredentials(input)),
    releaseCredentials: input => dispatch(actions.releaseCredentials(input)),
    modifyUser: input => dispatch(actions.modifyUser(input)),
    modifyComplaint: input => dispatch(actions.modifyComplaint(input)),
    setComplaint: input => dispatch(actions.setComplaint(input)),
    postComplaint: input => dispatch(actions.postComplaint(input)),
    updateComplaint: input => dispatch(actions.updateComplaint(input)),
    setFocusComplaint: input => dispatch(actions.setFocusComplaint(input)),
    fetchComplaints: () => dispatch(actions.fetchComplaints()),
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    deleteComplaint: input => dispatch(actions.deleteComplaint(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
