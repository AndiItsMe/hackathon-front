import FeatureCollections from 'objects';

export class App {
  public message: string = FeatureCollections.name;
  public features: Array<object> = FeatureCollections.features;
}
