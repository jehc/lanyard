/*global goog, lanyard */
/*jslint white: false, onevar: false, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, sub: true, nomen: false */

goog.provide('lanyard.FrameController');

/**
 * An interface for a frame controller
 *
 * @interface
 */
lanyard.FrameController = function () {};

/**
 * Initialize the frame.
 *
 * @param {lanyard.DrawContext} dc the context where the frame is located.
 */
lanyard.FrameController.prototype.initializeFrame = function (dc) {};

/**
 * Draw the frame.
 *
 * @param {lanyard.DrawContext} dc the context where the frame is located.
 */
lanyard.FrameController.prototype.drawFrame = function (dc) {};

/**
 * Finalize the frame.
 *
 * @param {lanyard.DrawContext} dc the context where the frame is located.
 */
lanyard.FrameController.prototype.finalizeFrame = function (dc) {};

/* EOF */
