import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2TrainingApp} from '../app/ng2-training';

beforeEachProviders(() => [Ng2TrainingApp]);

describe('App: Ng2Training', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2TrainingApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2TrainingApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});
