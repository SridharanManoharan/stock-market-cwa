import copyProvider from '../../../src/resources';
import CopyProvider, { transform, getValue } from '../../../src/utils/copy-provider';

describe('Copy Helper', () => {
  it('should set en-GB as the copy helper lang & copy file by default', () => {
    copyProvider.constructor();
    expect(copyProvider.lang).toEqual('en-GB');
  });

  describe('Exectute getResource & getCopy', () => {
    it('should return an empty string if not provided any parameters', () => {
      const actual = copyProvider.getCopy();
      expect(actual).toEqual('');
    });
    it('return the key value merged with attr values', () => {
      // eslint-disable-next-line no-template-curly-in-string
      expect(copyProvider.getResources('welcome ${name}', { name: 'JPMorgan' })).toEqual();
      // eslint-disable-next-line no-template-curly-in-string
      expect(copyProvider.getCopy('welcome ${name}', { name: 'JPMorgan' })).toEqual('welcome JPMorgan');
    });
    it('should call transform if provided transform options', () => {
      const copy = copyProvider.getCopy('test', {}, 'uppercase');
      expect(copy).toEqual('TEST');
    });
    it('should not call this.transform if not provided transform options', () => {
      const copy = copyProvider.getCopy('test');
      expect(copy).toEqual('test');
    });
  });

  describe('Execute transform', () => {
    it('should return empty string when not provided a resource parameter', () => {
      const actual0 = CopyProvider.transform('uppercase');
      const actual1 = CopyProvider.transform();
      expect(actual0).toEqual('');
      expect(actual1).toEqual('');
    });
    it('should handle uppercase transformations', () => {
      const initialCopy = 'capitalize this';
      const actual = CopyProvider.transform('uppercase', initialCopy);
      const expected = 'CAPITALIZE THIS';

      expect(actual).toEqual(expected);
    });
    it('should handle lowercase transformations', () => {
      const initialCopy = 'LOWERCASE THIS';
      const actual = CopyProvider.transform('lowercase', initialCopy);
      const expected = 'lowercase this';

      expect(actual).toEqual(expected);
    });
    it('should print a warning if requested transform is not available', () => {
      const initialCopy = 'LOWERCASE THIS';
      const warningText = 'Transformation for someTransform is not available';
      const consoleWarningMock = jest.fn();
      global.console.warn = consoleWarningMock;

      const actual = CopyProvider.transform('someTransform', initialCopy);
      expect(consoleWarningMock.mock.calls[0][0]).toEqual(warningText);
      expect(actual).toEqual(initialCopy);
    });
  });

  describe('Execute getValue', () => {
    it('should return an empty string and print a warning if not provided any parameters', () => {
      const warningText = 'Please provide copy object and key to getValue';
      const consoleWarningMock = jest.fn();
      global.console.warn = consoleWarningMock;

      const actual = CopyProvider.getValue();
      expect(consoleWarningMock.mock.calls[0][0]).toEqual(warningText);
      expect(actual).toEqual('');
    });
    it('should return an empty string and print a warning if not provided a tKey parameter', () => {
      const warningText = 'Please provide copy object and key to getValue';
      const consoleWarningMock = jest.fn();
      global.console.warn = consoleWarningMock;

      const actual = CopyProvider.getValue({});
      expect(consoleWarningMock.mock.calls[0][0]).toEqual(warningText);
      expect(actual).toEqual('');
    });
    it('should return provided key if key does not exist in provided locale object', () => {
      const key = 'cupcakes';
      const dataObject = {
        topFlavor: 'vanilla',
        worstFlavor: 'chocolate'
      };

      expect(CopyProvider.getValue(dataObject, key)).toEqual(key);
    });
    it('should return value of key from provided locale object if value exists', () => {
      const key = 'topFlavor';
      const dataObject = {
        topFlavor: 'vanilla',
        worstFlavor: 'chocolate'
      };

      expect(CopyProvider.getValue(dataObject, key)).toEqual('vanilla');
    });
  });

  describe('Execute getLocale', () => {
    it('should return the set language', () => {
      const language = 'some-locale';
      copyProvider.constructor(language);
      const actual = copyProvider.getLocale();
      const expected = language;

      expect(actual).toEqual(expected);
    });
  });
});
