package com.portaloverlay.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.fragment.app.commit
import com.portaloverlay.R
import com.portaloverlay.ui.portal.PortalOverlayFragment
import dagger.hilt.android.AndroidEntryPoint
import io.ionic.portals.PortalFragment
import io.ionic.portals.PortalManager

@AndroidEntryPoint
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        supportFragmentManager.commit {
            replace(R.id.container, PortalOverlayFragment.newInstance())
        }
    }
}