//© 2021 tadeo Murdock

package com.getsimplex.steptimer.com.getsimplex.steptimer.sensormessages;

/**
 * Created by tadeo on 9/7/2016.
 */
public class StepCount implements SensorMessage {

    private String message;
    private String deviceId;

    public String getMessageType(){
        return StepCount.class.getCanonicalName();
    }

    public void setMessage(String message){
        this.message=message;
    }

    public String getMessage(){
        return message;
    }

    @Override
    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }
}
