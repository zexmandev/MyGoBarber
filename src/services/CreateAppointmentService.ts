import Appointment from "../Models/Appointment";
import appointmentsRepository from "../repositories/AppointmentsRepository";
import { startOfHour } from "date-fns";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: appointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw Error("This appointment is already booked");
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
