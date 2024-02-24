interface BackendMessage<T = undefined> {
  message: string;
  meta?: T;
}

