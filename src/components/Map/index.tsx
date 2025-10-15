import { env } from '@/constants/env';
import { propertyData } from '@/constants/propertyData';
import { Property } from '@/constants/types';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import React from 'react'

const MapComponent = () => {
  const [isMapLoaded, setIsMapLoaded] = React.useState<boolean>(false);

  return (
    <APIProvider
      apiKey={env.GOOGLE_MAPS_API_KEY}
      onLoad={() => setIsMapLoaded(true)}
    >
      {isMapLoaded && (
      <div className='w-full h-auto animate-pulse bg-gray-200 rounded-[10px]'>

      </div>
    )}

      <Map
        mapId='76580f74910ebbdf69e7f290'
        defaultZoom={18}
        defaultCenter={{ lat: propertyData[0].lat, lng: propertyData[0].lng }}
        gestureHandling={'greedy'}
        colorScheme='DARK'
        disableDefaultUI={true}
        keyboardShortcuts={false}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        clickableIcons={false}
        style={{
          borderRadius: '10px',          
        }}
      >
        {propertyData?.map((property: Property) => (
          <Marker
            key={property.id}
            position={{ lat: property.lat, lng: property.lng }}
            title={property.name}
            icon={{
              url: '/images/svg/Location.svg',
            }}
            onClick={() => console.log(property)}
          />
        ))}
      </Map>
    </APIProvider>
  );
}

export default MapComponent