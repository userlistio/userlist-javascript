export default class Relation {
  constructor(scope, resource) {
    this.scope = scope;
    this.resource = resource;
  }

  create(attributes) {
    let resource = new this.resource(attributes);

    return this.client.post(this.endpoint, resource);
  }

  delete(identifier) {
    return this.client.delete(`${this.endpoint}/${identifier}`);
  }

  get client() {
    return this.scope.client;
  }

  get endpoint() {
    return this.resource.endpoint;
  }
}
