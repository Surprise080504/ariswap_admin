import React, { Component } from "react";
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footers/AdminFooter";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes.js";
import { ENV } from './../config/config';
import image3 from "assets/img/full-screen-image-3.jpg";

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			routes: routes
		};
	}

	componentDidMount() {
	}

	getBrandText = path => {
		for (let i = 0; i < routes.length; i++) {
			if (
				this.props.location.pathname.indexOf(
					routes[i].path
				) !== -1
			) {
				return routes[i].name;
			}
		}
		return "Not Found";
	};
	componentDidUpdate(e) {
		if (
			window.innerWidth < 993 &&
			e.history.location.pathname !== e.location.pathname &&
			document.documentElement.className.indexOf("nav-open") !== -1
		) {
			document.documentElement.classList.toggle("nav-open");
		}
		if (e.history.action === "PUSH") {
			document.documentElement.scrollTop = 0;
			document.scrollingElement.scrollTop = 0;
			this.refs.mainPanel.scrollTop = 0;
		}
	}
	render() {
		return (
			<div className={`wrapper`}>
				<Sidebar {...this.props} routes={this.state.routes} image={image3} background={'black'} />
				<div id="main-panel" className="main-panel" ref="mainPanel">
					<AdminNavbar {...this.props} brandText={this.getBrandText(this.props.location.pathname)} history={this.props.history} />
					<div className="content">
						{this.props.children}
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
})
export default connect(mapStateToProps, {})(Admin);