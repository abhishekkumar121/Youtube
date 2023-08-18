import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from "./VideoRow"

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
        <TuneIcon />
        <h2>FILTER</h2>

      </div>
      <hr />
      <ChannelRow 
      image="https://yt3.ggpht.com/eu051krrRNQMMi5h6ynfnvhFJzxzSKulJQ42g5v72MQ9Bvv8KdpNIa6yM-0iGpnDgSF0itAD=s68-c-k-c0x00ffffff-no-rj"
      channel="Sony"
      verified
      subs="108M"
      noOfVideos={78}
      description="You can get the awesome entertaining videos here"
      />
      <hr />
      <VideoRow 
      views="1.4M"
      subs="108M"
      description="Shark Tank India Season2"
      timestamp="8 days ago "
      channel="Sony"
      title="Shark Ka Vaar"
      image="https://origin-staticv2.sonyliv.com/landscape_thumb/show_set_STI_ep07_india_landscape_thumb.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="108M"
      description="Sania Mirza ke sath flirting "
      timestamp="3 days ago "
      channel="Sony"
      title="Sania Mirza in the Show"
      image="https://th.bing.com/th/id/OIP.KOYOu2W5hv6Ha76Ue3S-rwHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="108M"
      description="Crime Patrol ki dardnak kahani"
      timestamp="1 days ago "
      channel="Sony"
      title="Crime ki Haad par"
      image="https://th.bing.com/th/id/OIP.WKxBY6Hpr8UjVJ9GU6d70QHaE8?pid=ImgDet&rs=1.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="108M"
      description="Shark Tank India Season2"
      timestamp="10 days ago "
      channel="Sony"
      title="Shark Tank "
      image="https://i0.wp.com/wikiwiki.in/wp-content/uploads/2021/11/Shark-Tank-India-Sony-TV.jpg?fit=1280%2C720&ssl=1.jpg"
      />
      
    </div>
  )
}

export default SearchPage
