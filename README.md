# mobx-fetch-tracker
_Easy way to deal with request processing_

[![npm](https://img.shields.io/npm/v/mobx-fetch-tracker)](https://www.npmjs.com/package/mobx-fetch-tracker)

# Installation & Usage

NPM: `npm install mobx-fetch-tracker --save`
`import { FetchTracker } from 'mobx-fetch-tracker';`

### Parameters
-   `fetchUrl`
-   `fetcher?` fetchLike function
-   `preloadData?` initial data if you need
-   `refreshInterval?` interval for auto refresh
-  `options?` fetch options
- `parser?` function to parse response
- `autoFetch?` if true, fetch will be called after creation of instance

### Methods
- `setOptions`
- `load`
-  `off` - stop auto refresh 

### Example

```typescript
import { FetchTracker } from 'mobx-fetch-tracker';
import { reaction } from 'mobx';

const parser = 'your parser function'

const { data, isLoading } = new FetchTracker<IParsedData, IRawResponseDara>({
    fetchUrl: 'https://jsonplaceholder.typicode.com/todos/1',
    parser: parser,
    autoFetch: true,
    refreshInterval: 60_000,
});

heightData.load();

reaction(
    () => data,
    (data) => {
        console.log(data);
    },
);
```
