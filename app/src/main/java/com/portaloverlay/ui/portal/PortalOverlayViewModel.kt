package com.portaloverlay.ui.portal

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.portaloverlay.BuildConfig
import com.portaloverlay.data.PortalRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class PortalOverlayViewModel @Inject constructor(
    private val repository: PortalRepository
) : ViewModel() {

    private val _state: MutableStateFlow<State> = MutableStateFlow(State.Loading)
    val state: StateFlow<State> = _state

    fun loadContent() {
        viewModelScope.launch {
            repository
                .getPortalConfig()
                .onSuccess {
                    _state.value = State.Content(
                        key = BuildConfig.PORTAL_KEY,
                        token = BuildConfig.PORTAL_TOKEN,
                        startingRoute = it.startingRoute,
                        backendUrl = it.backendUrl
                    )
                }
                .onFailure {
                    _state.value = State.Error(it.localizedMessage ?: it.message.orEmpty())
                }
        }
    }

    sealed class State {
        object Loading : State()
        data class Content(
            val key: String,
            val token: String,
            val startingRoute: String,
            val backendUrl: String,
        ) : State()

        data class Error(val message: String) : State()
    }
}