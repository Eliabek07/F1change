import api from './api';

jest.mock('./api');
let axiosMocked: jest.Mocked<typeof api>;

describe('testing api ', () => {
  beforeEach(() => {
    axiosMocked = api as jest.Mocked<typeof api>;
  });

  afterEach(() => {
    axiosMocked.get.mockClear();
  });
  it('testing api ', async () => {
    await api.get('/drivers.json');

    expect(axiosMocked).toBeTruthy();
  });
});
