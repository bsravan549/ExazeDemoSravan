//
//  DeviceTypeInfo.swift
//  SravandemoExaze
//
//  Created by Exaze Technologies on 23/03/23.
//

import Foundation

@objc(DeviceTypeInfo)
class DeviceTypeInfo: NSObject {
  private var count = 0
  
  @objc
  func userDeviceType(_ callback:RCTResponseSenderBlock) {
    var deviceType: String
#if targetEnvironment(simulator)
    deviceType = "iOS Simulator"
#else
    deviceType = UIDevice.current.name
#endif
    callback([deviceType])
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
}
