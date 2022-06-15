docker run --rm -v $PWD/data:/data mundialis/grass-py3-pdal:stable-alpine gdal_edit.py -a_srs EPSG:2450 /data/dem.tif
docker run --rm -v $PWD/data:/data mundialis/grass-py3-pdal:stable-alpine gdalwarp -s_srs EPSG:2450 -t_srs EPSG:4326 /data/dem.tif /data/dem_reprojected.tif

echo "DONE"