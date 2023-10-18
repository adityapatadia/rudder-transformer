export const data = [
	{
		"name": "variance",
		"description": "Test 0",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
							"context": {
								"device": {
									"id": "df16bffa-5c3d-4fbb-9bce-3bab098129a7R",
									"manufacturer": "Xiaomi",
									"model": "Redmi 6",
									"name": "xiaomi"
								},
								"network": {
									"carrier": "Banglalink"
								},
								"os": {
									"name": "android",
									"version": "8.1.0"
								},
								"traits": {
									"address": {
										"city": "Dhaka",
										"country": "Bangladesh"
									},
									"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
								}
							},
							"event": "spin_result",
							"integrations": {
								"All": true
							},
							"message_id": "a80f82be-9bdc-4a9f-b2a5-15621ee41df8",
							"properties": {
								"additional_bet_index": 0,
								"battle_id": "N/A",
								"bet_amount": 9,
								"bet_level": 1,
								"bet_multiplier": 1,
								"coin_balance": 9466052,
								"current_module_name": "CasinoGameModule",
								"days_in_game": 0,
								"extra_param": "N/A",
								"fb_profile": "0",
								"featureGameType": "N/A",
								"game_fps": 30,
								"game_id": "fireEagleBase",
								"game_name": "FireEagleSlots",
								"gem_balance": 0,
								"graphicsQuality": "HD",
								"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
								"internetReachability": "ReachableViaLocalAreaNetwork",
								"isLowEndDevice": "False",
								"is_auto_spin": "False",
								"is_turbo": "False",
								"isf": "False",
								"ishighroller": "False",
								"jackpot_win_amount": 90,
								"jackpot_win_type": "Silver",
								"level": 6,
								"lifetime_gem_balance": 0,
								"no_of_spin": 1,
								"player_total_battles": 0,
								"player_total_shields": 0,
								"start_date": "2019-08-01",
								"total_payments": 0,
								"tournament_id": "T1561970819",
								"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
								"versionSessionCount": 2,
								"win_amount": 0
							},
							"timestamp": "2019-09-01T15:46:51.693229+05:30",
							"originalTimestamp": "2019-09-01T15:46:51.693229+05:30",
							"sentAt": "2019-09-01T15:46:51.693229+05:30",
							"type": "track",
							"user_properties": {
								"coin_balance": 9466052,
								"current_module_name": "CasinoGameModule",
								"fb_profile": "0",
								"game_fps": 30,
								"game_name": "FireEagleSlots",
								"gem_balance": 0,
								"graphicsQuality": "HD",
								"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
								"internetReachability": "ReachableViaLocalAreaNetwork",
								"isLowEndDevice": false,
								"level": 6,
								"lifetime_gem_balance": 0,
								"player_total_battles": 0,
								"player_total_shields": 0,
								"start_date": "2019-08-01",
								"total_payments": 0,
								"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
								"versionSessionCount": 2
							}
						},
						"destination": {
							"DestinationDefinition": {
								"Config": {
									"cdkEnabled": true
								}
							},
							"Config": {
								"webhookUrl": "http://6b0e6a60.ngrok.io",
								"authHeader": "Basic MVA4dUtGOF="
							}
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "http://6b0e6a60.ngrok.io",
							"headers": {
								"authorization": "Basic MVA4dUtGOF=",
								"content-type": "application/json"
							},
							"params": {},
							"body": {
								"JSON": {
									"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
									"context": {
										"device": {
											"id": "df16bffa-5c3d-4fbb-9bce-3bab098129a7R",
											"manufacturer": "Xiaomi",
											"model": "Redmi 6",
											"name": "xiaomi"
										},
										"network": {
											"carrier": "Banglalink"
										},
										"os": {
											"name": "android",
											"version": "8.1.0"
										},
										"traits": {
											"address": {
												"city": "Dhaka",
												"country": "Bangladesh"
											},
											"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
										}
									},
									"event": "spin_result",
									"integrations": {
										"All": true
									},
									"message_id": "a80f82be-9bdc-4a9f-b2a5-15621ee41df8",
									"properties": {
										"additional_bet_index": 0,
										"battle_id": "N/A",
										"bet_amount": 9,
										"bet_level": 1,
										"bet_multiplier": 1,
										"coin_balance": 9466052,
										"current_module_name": "CasinoGameModule",
										"days_in_game": 0,
										"extra_param": "N/A",
										"fb_profile": "0",
										"featureGameType": "N/A",
										"game_fps": 30,
										"game_id": "fireEagleBase",
										"game_name": "FireEagleSlots",
										"gem_balance": 0,
										"graphicsQuality": "HD",
										"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
										"internetReachability": "ReachableViaLocalAreaNetwork",
										"isLowEndDevice": "False",
										"is_auto_spin": "False",
										"is_turbo": "False",
										"isf": "False",
										"ishighroller": "False",
										"jackpot_win_amount": 90,
										"jackpot_win_type": "Silver",
										"level": 6,
										"lifetime_gem_balance": 0,
										"no_of_spin": 1,
										"player_total_battles": 0,
										"player_total_shields": 0,
										"start_date": "2019-08-01",
										"total_payments": 0,
										"tournament_id": "T1561970819",
										"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
										"versionSessionCount": 2,
										"win_amount": 0
									},
									"timestamp": "2019-09-01T15:46:51.693229+05:30",
									"originalTimestamp": "2019-09-01T15:46:51.693229+05:30",
									"sentAt": "2019-09-01T15:46:51.693229+05:30",
									"type": "track",
									"user_properties": {
										"coin_balance": 9466052,
										"current_module_name": "CasinoGameModule",
										"fb_profile": "0",
										"game_fps": 30,
										"game_name": "FireEagleSlots",
										"gem_balance": 0,
										"graphicsQuality": "HD",
										"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
										"internetReachability": "ReachableViaLocalAreaNetwork",
										"isLowEndDevice": false,
										"level": 6,
										"lifetime_gem_balance": 0,
										"player_total_battles": 0,
										"player_total_shields": 0,
										"start_date": "2019-08-01",
										"total_payments": 0,
										"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
										"versionSessionCount": 2
									}
								},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "variance",
		"description": "Test 1",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
							"context": {
								"device": {
									"id": "df16bffa-5c3d-4fbb-9bce-3bab098129a7R",
									"manufacturer": "Xiaomi",
									"model": "Redmi 6",
									"name": "xiaomi"
								},
								"network": {
									"carrier": "Banglalink"
								},
								"os": {
									"name": "android",
									"version": "8.1.0"
								},
								"traits": {
									"address": {
										"city": "Dhaka",
										"country": "Bangladesh"
									},
									"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
								}
							},
							"event": "spin_result",
							"integrations": {
								"All": true
							},
							"message_id": "a80f82be-9bdc-4a9f-b2a5-15621ee41df8",
							"properties": {
								"additional_bet_index": 0,
								"battle_id": "N/A",
								"bet_amount": 9,
								"bet_level": 1,
								"bet_multiplier": 1,
								"coin_balance": 9466052,
								"current_module_name": "CasinoGameModule",
								"days_in_game": 0,
								"extra_param": "N/A",
								"fb_profile": "0",
								"featureGameType": "N/A",
								"game_fps": 30,
								"game_id": "fireEagleBase",
								"game_name": "FireEagleSlots",
								"gem_balance": 0,
								"graphicsQuality": "HD",
								"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
								"internetReachability": "ReachableViaLocalAreaNetwork",
								"isLowEndDevice": "False",
								"is_auto_spin": "False",
								"is_turbo": "False",
								"isf": "False",
								"ishighroller": "False",
								"jackpot_win_amount": 90,
								"jackpot_win_type": "Silver",
								"level": 6,
								"lifetime_gem_balance": 0,
								"no_of_spin": 1,
								"player_total_battles": 0,
								"player_total_shields": 0,
								"start_date": "2019-08-01",
								"total_payments": 0,
								"tournament_id": "T1561970819",
								"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
								"versionSessionCount": 2,
								"win_amount": 0
							},
							"timestamp": "2019-09-01T15:46:51.693229+05:30",
							"originalTimestamp": "2019-09-01T15:46:51.693229+05:30",
							"sentAt": "2019-09-01T15:46:51.693229+05:30",
							"type": "track",
							"user_properties": {
								"coin_balance": 9466052,
								"current_module_name": "CasinoGameModule",
								"fb_profile": "0",
								"game_fps": 30,
								"game_name": "FireEagleSlots",
								"gem_balance": 0,
								"graphicsQuality": "HD",
								"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
								"internetReachability": "ReachableViaLocalAreaNetwork",
								"isLowEndDevice": false,
								"level": 6,
								"lifetime_gem_balance": 0,
								"player_total_battles": 0,
								"player_total_shields": 0,
								"start_date": "2019-08-01",
								"total_payments": 0,
								"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
								"versionSessionCount": 2
							}
						},
						"destination": {
							"DestinationDefinition": {
								"Config": {
									"cdkEnabled": true
								}
							},
							"Config": {
								"webhookUrl": "https://6b0e6a60.ngrok.io/n"
							}
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "https://6b0e6a60.ngrok.io/n",
							"headers": {
								"content-type": "application/json"
							},
							"params": {},
							"body": {
								"JSON": {
									"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
									"context": {
										"device": {
											"id": "df16bffa-5c3d-4fbb-9bce-3bab098129a7R",
											"manufacturer": "Xiaomi",
											"model": "Redmi 6",
											"name": "xiaomi"
										},
										"network": {
											"carrier": "Banglalink"
										},
										"os": {
											"name": "android",
											"version": "8.1.0"
										},
										"traits": {
											"address": {
												"city": "Dhaka",
												"country": "Bangladesh"
											},
											"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
										}
									},
									"event": "spin_result",
									"integrations": {
										"All": true
									},
									"message_id": "a80f82be-9bdc-4a9f-b2a5-15621ee41df8",
									"properties": {
										"additional_bet_index": 0,
										"battle_id": "N/A",
										"bet_amount": 9,
										"bet_level": 1,
										"bet_multiplier": 1,
										"coin_balance": 9466052,
										"current_module_name": "CasinoGameModule",
										"days_in_game": 0,
										"extra_param": "N/A",
										"fb_profile": "0",
										"featureGameType": "N/A",
										"game_fps": 30,
										"game_id": "fireEagleBase",
										"game_name": "FireEagleSlots",
										"gem_balance": 0,
										"graphicsQuality": "HD",
										"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
										"internetReachability": "ReachableViaLocalAreaNetwork",
										"isLowEndDevice": "False",
										"is_auto_spin": "False",
										"is_turbo": "False",
										"isf": "False",
										"ishighroller": "False",
										"jackpot_win_amount": 90,
										"jackpot_win_type": "Silver",
										"level": 6,
										"lifetime_gem_balance": 0,
										"no_of_spin": 1,
										"player_total_battles": 0,
										"player_total_shields": 0,
										"start_date": "2019-08-01",
										"total_payments": 0,
										"tournament_id": "T1561970819",
										"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
										"versionSessionCount": 2,
										"win_amount": 0
									},
									"timestamp": "2019-09-01T15:46:51.693229+05:30",
									"originalTimestamp": "2019-09-01T15:46:51.693229+05:30",
									"sentAt": "2019-09-01T15:46:51.693229+05:30",
									"type": "track",
									"user_properties": {
										"coin_balance": 9466052,
										"current_module_name": "CasinoGameModule",
										"fb_profile": "0",
										"game_fps": 30,
										"game_name": "FireEagleSlots",
										"gem_balance": 0,
										"graphicsQuality": "HD",
										"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
										"internetReachability": "ReachableViaLocalAreaNetwork",
										"isLowEndDevice": false,
										"level": 6,
										"lifetime_gem_balance": 0,
										"player_total_battles": 0,
										"player_total_shields": 0,
										"start_date": "2019-08-01",
										"total_payments": 0,
										"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
										"versionSessionCount": 2
									}
								},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "variance",
		"description": "Test 2",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
							"context": {
								"device": {
									"id": "df16bffa-5c3d-4fbb-9bce-3bab098129a7R",
									"manufacturer": "Xiaomi",
									"model": "Redmi 6",
									"name": "xiaomi"
								},
								"network": {
									"carrier": "Banglalink"
								},
								"os": {
									"name": "android",
									"version": "8.1.0"
								},
								"traits": {
									"address": {
										"city": "Dhaka",
										"country": "Bangladesh"
									},
									"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
								}
							},
							"event": "spin_result",
							"integrations": {
								"All": true
							},
							"message_id": "a80f82be-9bdc-4a9f-b2a5-15621ee41df8",
							"properties": {
								"additional_bet_index": 0,
								"battle_id": "N/A",
								"bet_amount": 9,
								"bet_level": 1,
								"bet_multiplier": 1,
								"coin_balance": 9466052,
								"current_module_name": "CasinoGameModule",
								"days_in_game": 0,
								"extra_param": "N/A",
								"fb_profile": "0",
								"featureGameType": "N/A",
								"game_fps": 30,
								"game_id": "fireEagleBase",
								"game_name": "FireEagleSlots",
								"gem_balance": 0,
								"graphicsQuality": "HD",
								"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
								"internetReachability": "ReachableViaLocalAreaNetwork",
								"isLowEndDevice": "False",
								"is_auto_spin": "False",
								"is_turbo": "False",
								"isf": "False",
								"ishighroller": "False",
								"jackpot_win_amount": 90,
								"jackpot_win_type": "Silver",
								"level": 6,
								"lifetime_gem_balance": 0,
								"no_of_spin": 1,
								"player_total_battles": 0,
								"player_total_shields": 0,
								"start_date": "2019-08-01",
								"total_payments": 0,
								"tournament_id": "T1561970819",
								"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
								"versionSessionCount": 2,
								"win_amount": 0
							},
							"timestamp": "2019-09-01T15:46:51.693229+05:30",
							"originalTimestamp": "2019-09-01T15:46:51.693229+05:30",
							"sentAt": "2019-09-01T15:46:51.693229+05:30",
							"type": "track",
							"user_properties": {
								"coin_balance": 9466052,
								"current_module_name": "CasinoGameModule",
								"fb_profile": "0",
								"game_fps": 30,
								"game_name": "FireEagleSlots",
								"gem_balance": 0,
								"graphicsQuality": "HD",
								"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
								"internetReachability": "ReachableViaLocalAreaNetwork",
								"isLowEndDevice": false,
								"level": 6,
								"lifetime_gem_balance": 0,
								"player_total_battles": 0,
								"player_total_shields": 0,
								"start_date": "2019-08-01",
								"total_payments": 0,
								"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
								"versionSessionCount": 2
							}
						},
						"destination": {
							"DestinationDefinition": {
								"Config": {
									"cdkEnabled": true
								}
							},
							"Config": {
								"webhookUrl": "https://6b0e6a60."
							}
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "https://6b0e6a60.",
							"headers": {
								"content-type": "application/json"
							},
							"params": {},
							"body": {
								"JSON": {
									"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
									"context": {
										"device": {
											"id": "df16bffa-5c3d-4fbb-9bce-3bab098129a7R",
											"manufacturer": "Xiaomi",
											"model": "Redmi 6",
											"name": "xiaomi"
										},
										"network": {
											"carrier": "Banglalink"
										},
										"os": {
											"name": "android",
											"version": "8.1.0"
										},
										"traits": {
											"address": {
												"city": "Dhaka",
												"country": "Bangladesh"
											},
											"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
										}
									},
									"event": "spin_result",
									"integrations": {
										"All": true
									},
									"message_id": "a80f82be-9bdc-4a9f-b2a5-15621ee41df8",
									"properties": {
										"additional_bet_index": 0,
										"battle_id": "N/A",
										"bet_amount": 9,
										"bet_level": 1,
										"bet_multiplier": 1,
										"coin_balance": 9466052,
										"current_module_name": "CasinoGameModule",
										"days_in_game": 0,
										"extra_param": "N/A",
										"fb_profile": "0",
										"featureGameType": "N/A",
										"game_fps": 30,
										"game_id": "fireEagleBase",
										"game_name": "FireEagleSlots",
										"gem_balance": 0,
										"graphicsQuality": "HD",
										"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
										"internetReachability": "ReachableViaLocalAreaNetwork",
										"isLowEndDevice": "False",
										"is_auto_spin": "False",
										"is_turbo": "False",
										"isf": "False",
										"ishighroller": "False",
										"jackpot_win_amount": 90,
										"jackpot_win_type": "Silver",
										"level": 6,
										"lifetime_gem_balance": 0,
										"no_of_spin": 1,
										"player_total_battles": 0,
										"player_total_shields": 0,
										"start_date": "2019-08-01",
										"total_payments": 0,
										"tournament_id": "T1561970819",
										"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
										"versionSessionCount": 2,
										"win_amount": 0
									},
									"timestamp": "2019-09-01T15:46:51.693229+05:30",
									"originalTimestamp": "2019-09-01T15:46:51.693229+05:30",
									"sentAt": "2019-09-01T15:46:51.693229+05:30",
									"type": "track",
									"user_properties": {
										"coin_balance": 9466052,
										"current_module_name": "CasinoGameModule",
										"fb_profile": "0",
										"game_fps": 30,
										"game_name": "FireEagleSlots",
										"gem_balance": 0,
										"graphicsQuality": "HD",
										"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
										"internetReachability": "ReachableViaLocalAreaNetwork",
										"isLowEndDevice": false,
										"level": 6,
										"lifetime_gem_balance": 0,
										"player_total_battles": 0,
										"player_total_shields": 0,
										"start_date": "2019-08-01",
										"total_payments": 0,
										"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
										"versionSessionCount": 2
									}
								},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "variance",
		"description": "Test 3",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
							"context": {
								"device": {
									"id": "df16bffa-5c3d-4fbb-9bce-3bab098129a7R",
									"manufacturer": "Xiaomi",
									"model": "Redmi 6",
									"name": "xiaomi"
								},
								"network": {
									"carrier": "Banglalink"
								},
								"os": {
									"name": "android",
									"version": "8.1.0"
								},
								"traits": {
									"address": {
										"city": "Dhaka",
										"country": "Bangladesh"
									},
									"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
								}
							},
							"event": "spin_result",
							"integrations": {
								"All": true
							},
							"message_id": "a80f82be-9bdc-4a9f-b2a5-15621ee41df8",
							"properties": {
								"additional_bet_index": 0,
								"battle_id": "N/A",
								"bet_amount": 9,
								"bet_level": 1,
								"bet_multiplier": 1,
								"coin_balance": 9466052,
								"current_module_name": "CasinoGameModule",
								"days_in_game": 0,
								"extra_param": "N/A",
								"fb_profile": "0",
								"featureGameType": "N/A",
								"game_fps": 30,
								"game_id": "fireEagleBase",
								"game_name": "FireEagleSlots",
								"gem_balance": 0,
								"graphicsQuality": "HD",
								"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
								"internetReachability": "ReachableViaLocalAreaNetwork",
								"isLowEndDevice": "False",
								"is_auto_spin": "False",
								"is_turbo": "False",
								"isf": "False",
								"ishighroller": "False",
								"jackpot_win_amount": 90,
								"jackpot_win_type": "Silver",
								"level": 6,
								"lifetime_gem_balance": 0,
								"no_of_spin": 1,
								"player_total_battles": 0,
								"player_total_shields": 0,
								"start_date": "2019-08-01",
								"total_payments": 0,
								"tournament_id": "T1561970819",
								"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
								"versionSessionCount": 2,
								"win_amount": 0
							},
							"timestamp": "2019-09-01T15:46:51.693229+05:30",
							"originalTimestamp": "2019-09-01T15:46:51.693229+05:30",
							"sentAt": "2019-09-01T15:46:51.693229+05:30",
							"type": "track",
							"request_ip": "127.0.0.1"
						},
						"destination": {
							"DestinationDefinition": {
								"Config": {
									"cdkEnabled": true
								}
							},
							"Config": {
								"webhookUrl": "http://6b0e6a60.ngrok.io",
								"header": [
									{
										"from": "test1",
										"to": "value1"
									},
									{
										"from": "test2",
										"to": "value2"
									}
								]
							}
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "http://6b0e6a60.ngrok.io",
							"headers": {
								"content-type": "application/json"
							},
							"params": {},
							"body": {
								"JSON": {
									"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
									"context": {
										"device": {
											"id": "df16bffa-5c3d-4fbb-9bce-3bab098129a7R",
											"manufacturer": "Xiaomi",
											"model": "Redmi 6",
											"name": "xiaomi"
										},
										"network": {
											"carrier": "Banglalink"
										},
										"os": {
											"name": "android",
											"version": "8.1.0"
										},
										"traits": {
											"address": {
												"city": "Dhaka",
												"country": "Bangladesh"
											},
											"anonymousId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
										},
										"ip": "127.0.0.1"
									},
									"event": "spin_result",
									"integrations": {
										"All": true
									},
									"message_id": "a80f82be-9bdc-4a9f-b2a5-15621ee41df8",
									"properties": {
										"additional_bet_index": 0,
										"battle_id": "N/A",
										"bet_amount": 9,
										"bet_level": 1,
										"bet_multiplier": 1,
										"coin_balance": 9466052,
										"current_module_name": "CasinoGameModule",
										"days_in_game": 0,
										"extra_param": "N/A",
										"fb_profile": "0",
										"featureGameType": "N/A",
										"game_fps": 30,
										"game_id": "fireEagleBase",
										"game_name": "FireEagleSlots",
										"gem_balance": 0,
										"graphicsQuality": "HD",
										"idfa": "2bf99787-33d2-4ae2-a76a-c49672f97252",
										"internetReachability": "ReachableViaLocalAreaNetwork",
										"isLowEndDevice": "False",
										"is_auto_spin": "False",
										"is_turbo": "False",
										"isf": "False",
										"ishighroller": "False",
										"jackpot_win_amount": 90,
										"jackpot_win_type": "Silver",
										"level": 6,
										"lifetime_gem_balance": 0,
										"no_of_spin": 1,
										"player_total_battles": 0,
										"player_total_shields": 0,
										"start_date": "2019-08-01",
										"total_payments": 0,
										"tournament_id": "T1561970819",
										"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1",
										"versionSessionCount": 2,
										"win_amount": 0
									},
									"timestamp": "2019-09-01T15:46:51.693229+05:30",
									"originalTimestamp": "2019-09-01T15:46:51.693229+05:30",
									"sentAt": "2019-09-01T15:46:51.693229+05:30",
									"type": "track",
									"request_ip": "127.0.0.1"
								},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": "c82cbdff-e5be-4009-ac78-cdeea09ab4b1"
						},
						"statusCode": 200
					}
				]
			}
		}
	}
]