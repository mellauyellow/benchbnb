import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BenchMiddleware from './benches_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BenchMiddleware
);

export default RootMiddleware;
