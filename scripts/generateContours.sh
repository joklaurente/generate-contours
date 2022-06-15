docker run --rm -v $PWD/data:/data mundialis/grass-py3-pdal:stable-alpine gdal_contour -a elev /data/dem_fill.tif /data/contour.geojson -i 10.0
cp ./data/contour.geojson ./public/contour.geojson