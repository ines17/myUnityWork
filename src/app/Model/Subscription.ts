import { User } from './User';
import { Association } from "./Association";
export class Subscription{
id : number;
subscriptionDate:any;
user:User;
association:Association;
admin:boolean;
}
