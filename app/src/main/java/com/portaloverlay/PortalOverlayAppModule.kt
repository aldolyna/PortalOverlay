package com.portaloverlay

import com.portaloverlay.data.network.PortalService
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

@Module
@InstallIn(SingletonComponent::class)
class PortalOverlayAppModule {

    @Provides
    fun provideOkHttpClient(): OkHttpClient {
        return OkHttpClient.Builder().build()
    }

    @Provides
    fun providePortalService(
        okHttpClient: OkHttpClient
    ): PortalService {
        return Retrofit.Builder()
            .baseUrl("https://raw.githubusercontent.com/")
            .client(okHttpClient)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(PortalService::class.java)
    }
}