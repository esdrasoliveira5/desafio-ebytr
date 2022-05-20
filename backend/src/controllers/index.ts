import Service from '../services';

abstract class Controller<T> {
  abstract route: string;

  constructor(public service: Service<T>) {}
}

export default Controller;