package com.portaloverlay.data

import com.portaloverlay.data.model.PortalConfig
import com.portaloverlay.data.network.PortalService
import javax.inject.Inject
import javax.inject.Singleton

interface PortalRepository {
    suspend fun getPortalConfig(): Result<PortalConfig>
}

@Singleton
class DefaultPortalRepository @Inject constructor(
    private val portalService: PortalService
) : PortalRepository {

    override suspend fun getPortalConfig(): Result<PortalConfig> {
        return try {
            Result.success(portalService.getPortalConfig())
        } catch (e: Throwable) {
            Result.failure(e)
        }
    }
}