import React, { Component } from "react";
import { Header, Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import factory from "../ethereum/factory";
import { Link, Router } from "../routes";
import "semantic-ui-css/semantic.min.css";

class CampaignIndex extends Component {
  // By using 'static' keyword function is not assigned to instance of a class,
  // instead assigned to class itself
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    // console.log("On Mount", campaigns);
    return {
      campaigns,
    };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <>
        <Layout>
          <Header as="h3">Open Campaigns</Header>
          <div>
            <Link route="/campaigns/new">
              <a>
                <Button
                  floated="right"
                  content="Create Campaign"
                  icon="add circle"
                  primary
                />
              </a>
            </Link>
            {this.renderCampaigns()}
          </div>
        </Layout>
      </>
    );
  }
}

export default CampaignIndex;
