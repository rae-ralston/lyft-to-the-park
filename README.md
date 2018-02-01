![!go outside](https://content.huckberry.com/assets/national-parks/national-parks-hero-fe8ac9f4230ffd16fde39c4561a59393c27d1aa55d85792f4af57f0fc84277ca.jpg)
# You should go outside.
**Lyft To The Park**
An app that displays California regional parks and calls you a Lyft to help you get there. It uses the National Park Service, Google Geocoding, & Lyft API's.

Tech Used: React, Redux, Redux-Thunk, Axios, Lyft SDK, React DOM.

## CONTRIBUTING
### Getting Up and Running

1. Clone this repo to your local machine.

1. get API keys:
    - [Google Maps API](https://developers.google.com/maps/documentation/geocoding/get-api-key)
    - [National Park Service API](https://www.nps.gov/subjects/digital/nps-data-api.htm)
    - [Lyft API](https://www.lyft.com/developers)

1. copy the `.env_example` and rename it `.env`
    ```bash
    $ cp .env_example .env
    ```

1. edit your `.env` file to include the relevant api keys.

1. install your dependencies
    ```bash
    $ npm install
    ```

1. start the development server
    ```bash
    $ npm start
    ```
