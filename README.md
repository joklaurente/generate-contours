# Generate contours from point cloud data

## Docker
1. Download and install Docker from the official website: https://docs.docker.com/get-docker/
2. Download the docker image that contains PDAL and GDAL.
```
docker pull mundialis/grass-py3-pdal:stable-alpine
```

## Copying the point cloud data
Copy `Atami_beforeDisaster_1.laz` and paste it inside the "data" folder.

## Running the application
Install the packages 
```
npm install
```
Run the application
```
npm start
```
Browser will automatically open after the data processing. If the browser failed to open, go to http://localhost:8000/
