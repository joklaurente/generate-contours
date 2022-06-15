docker run --rm -v $PWD/data:/data mundialis/grass-py3-pdal:stable-alpine pdal translate \
/data/Atami_beforeDisaster_1.laz \
-o /data/ground.laz \
smrf range \
--filters.range.limits="Classification[2:2]" \
-v 4

echo "DONE"