import { Query } from './Query';
import { Mutation } from './Mutation';
import { DataSources } from '../../index';

export interface Sources {
  dataSources: DataSources;
}

export default {
  Query,
  Mutation,
};
