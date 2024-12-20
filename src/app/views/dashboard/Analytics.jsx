import React, { Component, Fragment } from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Button,
  Checkbox,
  Fab,
  Avatar,
  Hidden,
  TextField,
} from "@material-ui/core";
import { Breadcrumb, SimpleCard, EgretProgressBar } from "egret";
import DashboardWelcomeCard from "../cards/DashboardWelcomeCard";
import DashboardWelcomeHealthOrgCard from "../cards/DashboardWelcomeHealthOrgCard";
import AreaChart from "../charts/echarts/AreaChart";
import { format } from "date-fns";
import ModifiedAreaChart from "./ModifiedAreaChart";
import { withStyles } from "@material-ui/styles";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import ConstantList from "../../appConfig";
import JwtAuthService from "../../services/jwtAuthService";
import { Helmet } from "react-helmet";
import ReactEcharts from "echarts-for-react";
import HomePage from "../HomePage/HomePage";

import {
  getCurrentUser,
  getEQARound,
  countNumberOfCorrectSampleTube,
  countNumberOfIncorrectSampleTube,
  countNumberOfNotSubmittedSampleTube,
  countNumberOfEQARound,
  countNumberOfHealthOrgEQARound,
  countNumberOfHealthOrgEQARoundByEQARound,
  countSampleTubeByEQARound,
} from "./DashboardService";
import Autocomplete from "@material-ui/lab/Autocomplete";
//let isAdmin=false;
class Dashboard1 extends Component {
  state = {
    user: {},
    isAdmin: false,
    isHealthOrg: false,
    isUser: false,
    numberOfIncorrectSampleTube: 0,
    numberOfNotSubmittedSampleTube: 0,
    numberOfCorrectSampleTube: 0,
    numberOfHealthOrgEQARound: 0,
    numberOfEQARound: 0,
    eqaRoundList: [],
    selectedEQARound: {},
    barChartData: [],
    pieChartData: [],
  };
  constructor(props) {
    super(props);
  }
  checkIsAdmin = () => {
    this.setState({ isAdmin: false });
    if (
      this.state.user != null &&
      this.state.user.roles != null &&
      this.state.user.roles.length > 0
    ) {
      this.state.user.roles.forEach((element) => {
        if (element.name == "ROLE_ADMIN") {
          //isAdmin=true;
          this.setState({ isAdmin: true });
          return true;
        }
      });
    }
  };
  getBarChartData = async () => {
    const barChartQueryResult = (
      await countNumberOfHealthOrgEQARoundByEQARound()
    ).data;
    let barChartData = [];
    for (const dto of barChartQueryResult) {
      barChartData.push([dto.round.name, dto.count]);
    }
    return barChartData;
  };

  getPieChartData = async (roundId) => {
    let pieChartData = [];
    try {
      const pieChartQueryResult = (await countSampleTubeByEQARound(roundId))
        .data;
      for (const [key, value] of Object.entries(pieChartQueryResult)) {
        switch (key) {
          case "correct":
            pieChartData.push({
              value,
              name: this.props.t("Analytics.correct"),
            });
            break;
          case "incorrect":
            pieChartData.push({
              value,
              name: this.props.t("Analytics.incorrect"),
            });
            break;
          case "notSubmitted":
            pieChartData.push({
              value,
              name: this.props.t("Analytics.not_submitted"),
            });
            break;
          default:
            break;
        }
      }
    } catch (err) {
      pieChartData = [
        { value: 0, name: this.props.t("Analytics.correct") },
        { value: 0, name: this.props.t("Analytics.incorrect") },
        { value: 0, name: this.props.t("Analytics.not_submitted") },
      ];
    } finally {
      return pieChartData;
    }
  };

  handleSelectEQARound = async (selectedEQARound) => {
    const pieChartData = await this.getPieChartData(selectedEQARound.id);
    this.setState({
      pieChartData,
      selectedEQARound,
    });
  };

  async componentWillMount() {
    let user = JwtAuthService.getLoginUser();
    if (user != null && user.roles != null && user.roles.length > 0) {
      //this.setState({ isAdmin: false });
      this.setState({
        isHealthOrg: false,
        isAdmin: false,
        isUser: false,
      });
      user.roles.forEach((role) => {
        //alert(role.name);
        if (role.name == "ROLE_ADMIN") {
          this.setState({ isAdmin: true });
        } else if (role.name == "ROLE_HEALTH_ORG") {
          this.setState({ isHealthOrg: true });
        } else if (role.name == "ROLE_USER") {
          this.setState({ isUser: true });
        }
      });

      // this.setState({ isAdmin: false });
      // user.roles.forEach(role => {
      //   if (role.name == "ROLE_ADMIN") {
      //     this.setState({ isAdmin: true });
      //   } else if (role.name == "ROLE_HEALTH_ORG") {
      //     this.setState({ isHealthOrg: true });
      //   } else if (role.name == "ROLE_USER") {
      //     this.setState({ isUser: true });
      //   } else {
      //     this.setState({
      //       isHealthOrg: false,
      //       isAdmin: false,
      //       isUser: false
      //     });
      //   }
      // });
    }

    // getCurrentUser().then(({ data }) => {
    //   this.setState({ user: data }, () => {
    //     let { user } = this.state;
    //     if (user != null && user.roles != null && user.roles.length > 0) {
    //       this.setState({ isAdmin: false });
    //       user.roles.forEach(role => {
    //         if (role.name == "ROLE_ADMIN") {
    //           this.setState({ isAdmin: true });
    //         } else if (role.name == "ROLE_HEALTH_ORG") {
    //           this.setState({ isHealthOrg: true });
    //         } else if (role.name == "ROLE_USER") {
    //           this.setState({ isUser: true });
    //         } else {
    //           this.setState({
    //             isHealthOrg: false,
    //             isAdmin: false,
    //             isUser: false
    //           });
    //         }
    //       });
    //     }
    //   });
    // });

    //let { user } = localStorageService.getLoginUser();
    const numberOfCorrectSampleTube = (await countNumberOfCorrectSampleTube())
      .data;
    const numberOfIncorrectSampleTube = (
      await countNumberOfIncorrectSampleTube()
    ).data;
    const numberOfNotSubmittedSampleTube = (
      await countNumberOfNotSubmittedSampleTube()
    ).data;

    var numberOfHealthOrgEQARound = (await countNumberOfHealthOrgEQARound())
      .data;
    var numberOfEQARound = (await countNumberOfEQARound()).data;
    var eqaRoundList = (await getEQARound()).data.content;
    var selectedEQARound = await eqaRoundList[0];
    var barChartData = await this.getBarChartData();

    var pieChartData = null;
    if (selectedEQARound != null)
      pieChartData = await this.getPieChartData(selectedEQARound.id);

    this.setState({
      numberOfCorrectSampleTube,
      numberOfIncorrectSampleTube,
      numberOfNotSubmittedSampleTube,
      numberOfHealthOrgEQARound,
      numberOfEQARound,
      eqaRoundList,
      selectedEQARound,
      barChartData,
      pieChartData,
    });
  }

  render() {
    let { theme, t, i18n } = this.props;
    //this.checkIsAdmin();
    let isAdmin = this.state.isAdmin;
    const {
      numberOfEQARound,
      numberOfHealthOrgEQARound,
      numberOfIncorrectSampleTube,
      numberOfNotSubmittedSampleTube,
      numberOfCorrectSampleTube,
      eqaRoundList,
      selectedEQARound,
      barChartData,
      pieChartData,
    } = this.state;
    const bigCardStyle = {
      height: "500px",
      padding: "10px",
      fontFamily: "Arial",
    };

    const barChartOptions = {
      title: {
        text: t("Analytics.registered_units"),
        left: "center",
        fontFamily: "Arial",
      },
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: false,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            show: true,
          },
          name: t("Analytics.number_of_registered_units"),
          nameLocation: "end",
          nameTextStyle: {
            align: "left",
          },
        },
      ],
      series: [
        {
          name: t("Analytics.registered_units"),
          type: "bar",
          barWidth: "60%",
          data: barChartData,
          label: {
            show: true,
            position: "top",
          },
        },
      ],
    };

    const pieChartOptions = {
      title: {
        text: t("Analytics.eqa_round_result"),
        left: "center",
        fontFamily: "Arial",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: [
          t("Analytics.correct"),
          t("Analytics.incorrect"),
          t("Analytics.not_submitted"),
        ],
      },
      color: ["#229955", "#ff0000", "#9400ff"],
      series: [
        {
          name: t("Analytics.eqa_round_result"),
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: pieChartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    return (
      <div className="analytics m-sm-30">

      </div>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
