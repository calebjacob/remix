import type { ThrownResponse } from 'remix';
import { json } from 'remix';

type CatchData = {
  message: string;
  details?: string;
};

export type DescriptiveThrownResponse = ThrownResponse<number, CatchData>;

export default function throwResponse(status: number, data: CatchData) {
  throw json(data, { status });
}
