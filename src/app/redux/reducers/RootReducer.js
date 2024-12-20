import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import  employeeReducer  from '../reducers/EmployeeReducers';
import  CertificateReducer  from '../reducers/CertificateReducer';
import  FamilyReducer  from '../reducers/FamilyReducer';
import  ExperiencesReducer  from '../reducers/ExperiencesReducer';

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  employees: employeeReducer,
  certificate: CertificateReducer,
  family: FamilyReducer,
  experience: ExperiencesReducer,
});

export default RootReducer;
