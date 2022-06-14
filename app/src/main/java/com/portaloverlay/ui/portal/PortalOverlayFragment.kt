package com.portaloverlay.ui.portal

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.fragment.app.commit
import androidx.fragment.app.viewModels
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import com.getcapacitor.CapConfig
import com.portaloverlay.R
import dagger.hilt.android.AndroidEntryPoint
import io.ionic.portals.PortalFragment
import io.ionic.portals.PortalManager
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

@AndroidEntryPoint
class PortalOverlayFragment : Fragment() {

    companion object {
        fun newInstance() = PortalOverlayFragment()
    }

    private val viewModel: PortalOverlayViewModel by viewModels()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = inflater.inflate(R.layout.portal_fragment, container, false)

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        viewModel.loadContent()
        viewLifecycleOwner.lifecycleScope.launch {
            viewLifecycleOwner.lifecycle.repeatOnLifecycle(Lifecycle.State.RESUMED) {
                viewModel.state.collect {
                    when (it) {
                        is PortalOverlayViewModel.State.Content -> attachPortal(it)
                        is PortalOverlayViewModel.State.Error -> Toast.makeText(
                            context,
                            it.message,
                            Toast.LENGTH_SHORT
                        ).show()
                        is PortalOverlayViewModel.State.Loading -> {}
                    }
                }
            }
        }
    }

    private fun attachPortal(state: PortalOverlayViewModel.State.Content) {
        PortalManager.register(state.key)

        val portal = PortalManager.newPortal(state.startingRoute)
            .setStartDir("build")
            .setInitialContext(
                mapOf(
                    "startingRoute" to state.startingRoute,
                    "url" to state.backendUrl,
                    "token" to state.token,
                )
            )
            .create()
            .also { PortalManager.addPortal(it) }

        val fragment = PortalFragment(portal)

        childFragmentManager.commit {
            replace(R.id.container, fragment)
        }
    }

}