package com.portaloverlay.ui.portal

import com.portaloverlay.data.DefaultPortalRepository
import com.portaloverlay.data.PortalRepository
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ViewModelComponent

@Module
@InstallIn(ViewModelComponent::class)
interface PortalOverlayModule {
    @Binds
    fun bindsPortalRepository(instance: DefaultPortalRepository): PortalRepository
}