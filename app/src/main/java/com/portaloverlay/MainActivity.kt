package com.portaloverlay

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import io.ionic.portals.PortalFragment
import io.ionic.portals.PortalManager

private const val KEY = ""
private const val TOKEN = ""
private const val BACKEND_URL = "https://exmaple.com"
private const val STARTING_ROUTE = "/classes-widget"

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        // Dark overlay appears if switching thread in between onCreate() and fragment transaction
        Handler(Looper.getMainLooper()).post {
            attachPortal() // Unwrap this method out of post {} and overlay disappears
        }
    }

    private fun attachPortal() {
        PortalManager.register(KEY)

        val portal = PortalManager.newPortal(STARTING_ROUTE)
            .setStartDir("build")
            .setInitialContext(
                mapOf(
                    "startingRoute" to STARTING_ROUTE,
                    "url" to BACKEND_URL,
                    "token" to TOKEN,
                )
            )
            .create()
            .also { PortalManager.addPortal(it) }

        val fragment = PortalFragment(portal)

        supportFragmentManager
            .beginTransaction()
            .replace(R.id.container, fragment)
            .commit()
    }
}