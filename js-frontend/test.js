async function fetch_file() {
    const res = await fetch('https://oceandata.sci.gsfc.nasa.gov/cgi/getfile/AQUA_MODIS.20230101_20230131.L3m.MO.SST.sst.9km.nc')
    console.log(res.json())
}

fetch_file()