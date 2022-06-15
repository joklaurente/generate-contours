docker run --rm -v $PWD/data:/data mundialis/grass-py3-pdal:stable-alpine gdal_fillnodata.py -md 10 -b 1 -of GTiff /data/dem_reprojected.tif /data/dem_fill.tif

echo "DONE"