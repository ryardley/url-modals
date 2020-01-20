import { EventBus, createEventDefinition } from "ts-bus";
import fetch from "isomorphic-fetch";
import { Job } from "./types";

export const fetchJobs = createEventDefinition<{ searchText: string }>()(
  "fetchJobs"
);

export const updateJobs = createEventDefinition<{ jobs: Job[] }>()(
  "updateJobs"
);

export type Action =
  | ReturnType<typeof fetchJobs>
  | ReturnType<typeof updateJobs>;

export function getBus() {
  const bus = new EventBus();

  bus.subscribe(fetchJobs, async (event: ReturnType<typeof fetchJobs>) => {
    if (event.payload.searchText) {
      const descriptionSearch = event.payload.searchText.replace(" ", "+");
      const result = await fetch(`/api?description=${descriptionSearch}`);
      const data = (await result.json()) as Job[];
      const evt = updateJobs({ jobs: data });
      bus.publish(evt);
    }
  });

  return bus;
}
