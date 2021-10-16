import { Time } from "@angular/common";
import { ScheduleDaysService } from "app/service/schedule-days.service";
import { ScheduleDays } from "./scheduleDays";

export class Schedule {
    id: number;
    flightId: number;
    source: string;
    destination: string;
    takeOffTime: Time;
    landingTime: Time;
    scheduleDays: string;
    schedule: Array<ScheduleDays>;

    constructor(private getScheduleDays: ScheduleDaysService) {
        this.id = 0;
        this.source = "";
        this.destination = "";
        this.flightId = 0;
        this.scheduleDays = "";
        this.schedule = this.getScheduleDays.getScheduleDays();
    }
}