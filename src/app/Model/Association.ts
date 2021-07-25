import { Subscription } from './Subscription';
import { Event } from 'src/app/Model/Event';

export class Association{
  id: number;
  Name: string;
  activity: string;
  logo: string;
  adress: string;
  fondationDate: any;
  dateEvent: any;
  region: string;
  validation: boolean;
  validationCertif: string
  events: Event;
  subscriptions: Subscription;


}
