import merge from 'lodash/merge';
import { CopyProvider } from '../utils';
import enGB from './en-GB.json';

const commonCopy = {
    'en-GB': enGB
};

const appCopy = merge(commonCopy, {});

const provider = new CopyProvider('en-GB', appCopy);
provider.getResource = provider.getCopy.bind(provider);

export default provider;
