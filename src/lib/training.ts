import { ITraining } from "@/types/training";
import db from "./db";

export function getTrainings(): ITraining[] {
  const stmt = db.prepare("SELECT * FROM trainings");
  return stmt.all() as ITraining[];
}
