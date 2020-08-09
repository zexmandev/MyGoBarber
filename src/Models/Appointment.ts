import { uuid } from "uuidv4"; // essa biblioteca serve para gerar id's

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: omit<Appointment, "id">) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}
export default Appointment;
