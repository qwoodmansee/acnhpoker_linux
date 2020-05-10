# ACNH Poker Web

ACNH Poker Web is a fork of the ACNH Poker Utility which allows for cross platform live editing of inventory slots in Animal Crossing New Horizons. Being Dockerized, you can run this application on any machine capable of running docker. 

## Dependencies
1. A Nintendo Switch capable of running unsigned code. I recommend [Birb's Guide](https://birbchirp.gitbook.io/switchguide/) if you haven't already set this up.
2. [sys-botbase nsp](https://github.com/olliz0r/sys-botbase) installed on your switch.
3. [Docker](https://www.docker.com/products/docker-desktop) installed and running on your machine.

## Installation

With Docker running, run the follow command in the root directory of this project:


```bash
docker-compose up
```

## Usage
1. Once docker-compose is running, visit `localhost:3000` in your web browser.
2. Enter your switch's IP address in the IP Address field
3. Search for your item
4. Click the Item to have it's ID copied into the ID field
5. Press Send

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 

For development, I recommend bypassing docker and running `yarn start` in the `react-frontend` folder, as well as `pipenv shell` and `python main.py` in the `python-backend` folder.

## License
[MIT](https://choosealicense.com/licenses/mit/)