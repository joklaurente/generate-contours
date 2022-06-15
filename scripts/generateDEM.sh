docker run --rm -v $PWD/data:/data mundialis/grass-py3-pdal:stable-alpine pdal pipeline /data/dem.json -v 4
echo "DONE"