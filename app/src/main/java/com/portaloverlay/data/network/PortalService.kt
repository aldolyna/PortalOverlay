package com.portaloverlay.data.network

import com.portaloverlay.data.model.PortalConfig
import retrofit2.http.GET

interface PortalService {

    @GET("/aldolyna/PortalOverlay/retrofit/sample/PortalConfig.json")
    suspend fun getPortalConfig(): PortalConfig
}